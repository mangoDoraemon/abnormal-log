package com.asiainfo.abnormallog.utils.es;

import com.asiainfo.abnormallog.entity.AqLog;
import com.asiainfo.abnormallog.entity.Log;
import com.asiainfo.abnormallog.entity.vo.BarData;
import com.asiainfo.abnormallog.entity.vo.DataParam;
import com.asiainfo.abnormallog.utils.AjaxResult;
import com.asiainfo.abnormallog.utils.GenericsUtils;
import com.asiainfo.abnormallog.utils.date.DateUtils;
import org.apache.commons.collections.MapUtils;
import org.frameworkset.elasticsearch.boot.BBossESStarter;
import org.frameworkset.elasticsearch.client.ClientInterface;
import org.frameworkset.elasticsearch.entity.ESDatas;
import org.frameworkset.elasticsearch.entity.MapRestResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.util.*;

/**
 * ES 操作模版
 * @author wangjingyuan
 */
@Service
public class EsTemplate {



    /**
     * 分页查询外呼与网管的索引信息
     * @param dataParam
     * @param dsl
     * @return
     */
    public Map<String,Object> queryPage(DataParam dataParam,String dsl){
        Map<String,Object> map = new HashMap<>();
        ClientInterface clientUtil = EsClient.restClient("logMapper");
        Map<String,Object> params = new HashMap<String,Object>();
        params.put("type",dataParam.getMessage());
        params.put("startTime", DateUtils.localToUTC(dataParam.getStartTime()));
        params.put("endTime",DateUtils.localToUTC(dataParam.getEndTime()));
        ESDatas<Log> esDatas = null;
        long totalSize = 0;
        List<Log> list = null;
        params.put("from",dataParam.getPageNum()*dataParam.getPageSize());
        params.put("size",dataParam.getPageSize());
         esDatas = clientUtil.searchList(dataParam.getIndexType()+"/_search",
                 dsl,
                        params,
                        Log.class);
        list = esDatas.getDatas();
        for(int i = 0; list != null && i < list.size(); i ++){
            Log log = list.get(i);
            Map<String,List<Object>> highLights = log.getHighlight();
            Iterator<Map.Entry<String, List<Object>>> entries = highLights.entrySet().iterator();
            while(entries.hasNext()){
                Map.Entry<String, List<Object>> entry = entries.next();
                List<Object> fieldHighLightSegments = entry.getValue();
                for (Object highLightSegment:fieldHighLightSegments){
                    list.get(i).setMessage((String) highLightSegment);
                }
            }
        }
        totalSize = esDatas.getTotalSize();
        map.put("rows",list);
        map.put("totalSize",totalSize);
        return map;
    }

    /**
     * 查询外呼与网关的图表信息
     * @param dataParam
     * @param dsl
     * @return
     */
    public Map<String,Object> queryLogBar(DataParam dataParam,String dsl){

        Map<String,Object> resultMap = new HashMap<>();
        ClientInterface clientUtil = EsClient.restClient("logMapper");
        Map<String,Object> params = new HashMap<String,Object>();
        params.put("type",dataParam.getMessage());
        params.put("startTime", DateUtils.localToUTC(dataParam.getStartTime()));
        params.put("endTime",DateUtils.localToUTC(dataParam.getEndTime()));
        params.put("timeInterval",dataParam.getTimeInterval());
        MapRestResponse restResponse =clientUtil.search(dataParam.getIndexType()+"/_search",
                dsl,
                params);
        List<Map<String,Object>> mapList = (List<Map<String,Object>>)restResponse.getAggBuckets("groupDate");
        if(mapList != null && mapList.size() > 0){
            List<BarData> barDataList = new ArrayList<BarData>(mapList.size());
            BarData barData = null;
            for (int i = 0; i < mapList.size(); i++){
                barData = new BarData();
                Map<String, Object> map = mapList.get(i);
                Integer totalSize = (Integer) map.get("doc_count");
                barData.setTotalSize(totalSize);
                try {
                    String dateTime = DateUtils.utcToLocal((String) map.get("key_as_string"));
                    barData.setDateTime(dateTime);
                } catch (ParseException e) {
                    e.printStackTrace();
                }
                barDataList.add(barData);
            }
            if(barDataList != null && barDataList.size()>0){
                List<Integer> ydataList = new ArrayList<>();
                List<String> xdataList = new ArrayList<>();
                for (BarData bar:barDataList
                     ) {
                    ydataList.add(bar.getTotalSize());
                    xdataList.add(bar.getDateTime());
                }
                resultMap.put("xData",xdataList);
                resultMap.put("yData",ydataList);
            }

        }
        return resultMap;
    }

    /**
     * 分页查询安全的日志信息
     * @param dataParam
     * @return
     */
    public Map<String,Object> querySecurityLog(DataParam dataParam,String dsl){

        Map<String,Object> resultMap = new HashMap<>();
        ClientInterface clientUtil = EsClient.restClient("logMapper");
        Map<String,Object> params = new HashMap<String,Object>();
        params.put("type",dataParam.getMessage());
        try {
            params.put("startTime", DateUtils.DateToTimeStamp(dataParam.getStartTime()));
            params.put("endTime",DateUtils.DateToTimeStamp(dataParam.getEndTime()));
        } catch (ParseException e) {
            e.printStackTrace();
        }
        ESDatas<AqLog> esDatas = null;
        long totalSize = 0;
        List<AqLog> list = null;
        params.put("from",dataParam.getPageNum()*dataParam.getPageSize());
        params.put("size",dataParam.getPageSize());
        params.put("size",dataParam.getPageSize());
        esDatas = clientUtil.searchList(dataParam.getIndexType()+"/_search",
                dsl,
                params,
                AqLog.class);
        list = esDatas.getDatas();
        for(int i = 0; list != null && i < list.size(); i ++){
            AqLog log = list.get(i);
            Map<String,List<Object>> highLights = log.getHighlight();
            Iterator<Map.Entry<String, List<Object>>> entries = highLights.entrySet().iterator();
            while(entries.hasNext()){
                Map.Entry<String, List<Object>> entry = entries.next();
                List<Object> fieldHighLightSegments = entry.getValue();
                for (Object highLightSegment:fieldHighLightSegments){
                    list.get(i).setMessage((String) highLightSegment);
                }
            }
        }
        totalSize = esDatas.getTotalSize();
        resultMap.put("rows",list);
        resultMap.put("totalSize",totalSize);
        return resultMap;
    }


    /**
     * 查询安全日志图表信息
     * @param dataParam
     * @param dsl
     * @return
     */
    public Map<String, Object> querySecurityBar(DataParam dataParam, String dsl) {
        Map<String,Object> resultMap = new HashMap<>();
        ClientInterface clientUtil = EsClient.restClient("logMapper");
        Map<String,Object> params = new HashMap<String,Object>();
        params.put("type",dataParam.getMessage());
        try {
            params.put("startTime", DateUtils.DateToTimeStamp(dataParam.getStartTime()));
            params.put("endTime",DateUtils.DateToTimeStamp(dataParam.getEndTime()));
        } catch (ParseException e) {
            e.printStackTrace();
        }

        params.put("timeInterval",dataParam.getTimeInterval());
        MapRestResponse restResponse =clientUtil.search(dataParam.getIndexType()+"/_search",
                dsl,
                params);
        List<Map<String,Object>> mapList = (List<Map<String,Object>>)restResponse.getAggBuckets("groupDate");
        if(mapList != null && mapList.size() > 0){
            List<BarData> barDataList = new ArrayList<BarData>(mapList.size());
            BarData barData = null;
            for (int i = 0; i < mapList.size(); i++){
                barData = new BarData();
                Map<String, Object> map = mapList.get(i);
                Integer totalSize = (Integer) map.get("doc_count");
                barData.setTotalSize(totalSize);
                try {
                    String dateTime = DateUtils.utcToLocal((String) map.get("key_as_string"));
                    barData.setDateTime(dateTime);
                } catch (ParseException e) {
                    e.printStackTrace();
                }
                barDataList.add(barData);
            }
            if(barDataList != null && barDataList.size()>0){
                List<Integer> ydataList = new ArrayList<>();
                List<String> xdataList = new ArrayList<>();
                for (BarData bar:barDataList
                ) {
                    ydataList.add(bar.getTotalSize());
                    xdataList.add(bar.getDateTime());
                }
                resultMap.put("xData",xdataList);
                resultMap.put("yData",ydataList);
            }

        }
        return resultMap;
    }
}
