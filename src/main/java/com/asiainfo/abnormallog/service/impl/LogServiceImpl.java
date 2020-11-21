package com.asiainfo.abnormallog.service.impl;

import com.asiainfo.abnormallog.constant.Constants;
import com.asiainfo.abnormallog.core.page.TableDataInfo;
import com.asiainfo.abnormallog.entity.AqLog;
import com.asiainfo.abnormallog.entity.Log;
import com.asiainfo.abnormallog.entity.vo.DataInfo;
import com.asiainfo.abnormallog.entity.vo.DataParam;
import com.asiainfo.abnormallog.service.ILogService;
import com.asiainfo.abnormallog.utils.date.DateUtils;
import com.asiainfo.abnormallog.utils.es.EsTemplate;
import org.apache.commons.collections.CollectionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author wangjingyuan
 */
@Service
public class LogServiceImpl implements ILogService {

    @Autowired
    private EsTemplate esTemplate;

    /**
     * 分页查询数据
     * @param dataParam
     * @return
     */
    @Override
    public TableDataInfo list(DataParam dataParam) {

        Map<String,Object> map = new HashMap<>();
        if(dataParam.getIndexType().equals(Constants.HOST_OUT_CALL_INDEX)){
            map = esTemplate.queryPage(dataParam,"searchPagineDatas");
            return resultCalculated(map,Constants.LOG);
        }else if(dataParam.getIndexType().equals(Constants.GATEWAY_APP_LOG)) {
            map = esTemplate.queryPage(dataParam,"searchGateWayData");
            return resultCalculated(map,Constants.LOG);
        }else {
            map = esTemplate.querySecurityLog(dataParam,"searchSecurityData");
            return resultCalculated(map,Constants.AQ_LOG);

        }

    }

    @Override
    public Map<String,Object> queryBar(DataParam dataParam) {

        if(dataParam.getIndexType().equals(Constants.HOST_OUT_CALL_INDEX)){
            return esTemplate.queryLogBar(dataParam,"searchBar");
        }else if(dataParam.getIndexType().equals(Constants.GATEWAY_APP_LOG)){
            return esTemplate.queryLogBar(dataParam,"searchGateWayBar");
        }else {
            return esTemplate.querySecurityBar(dataParam,"searchSecurityBar");
        }


    }

    public static TableDataInfo resultCalculated(Map<String,Object> map,String type){
        TableDataInfo tableDataInfo = new TableDataInfo();
        List<DataInfo> dataInfoList = new ArrayList<>();
        if(type.equals(Constants.LOG)){
            List<Log> list = (List<Log>) map.get("rows");

            if(!CollectionUtils.isEmpty(list)){
                for (Log log:list){
                    DataInfo dataInfo = new DataInfo();
                    dataInfo.setMessage(log.getMessage());
                    dataInfo.setTimeStamp(DateUtils.parseDateToStr("yyyy-MM-dd HH:mm:ss",log.getTimeStamp()));
                    dataInfo.setType(log.getType());
                    dataInfoList.add(dataInfo);
                }
            }
        }
        if(type.equals(Constants.AQ_LOG)){
            List<AqLog> list = (List<AqLog>) map.get("rows");
            if(!CollectionUtils.isEmpty(list)){
                for (AqLog log:list){
                    DataInfo dataInfo = new DataInfo();
                    dataInfo.setMessage(log.getMessage());
                    dataInfo.setTimeStamp(DateUtils.parseDateToStr("yyyy-MM-dd HH:mm:ss",log.getTimeStamp()));
                    dataInfo.setType(log.getType());
                    dataInfoList.add(dataInfo);
                }
            }
        }


        long size = (long) map.get("totalSize");
        tableDataInfo.setRows(dataInfoList);
        tableDataInfo.setTotal(size);
        return tableDataInfo;
    }
}
