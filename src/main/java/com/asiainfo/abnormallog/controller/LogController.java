package com.asiainfo.abnormallog.controller;

import com.asiainfo.abnormallog.core.page.TableDataInfo;
import com.asiainfo.abnormallog.core.web.BaseController;
import com.asiainfo.abnormallog.entity.Log;
import com.asiainfo.abnormallog.entity.vo.DataParam;
import com.asiainfo.abnormallog.service.ILogService;
import com.asiainfo.abnormallog.utils.AjaxResult;
import org.frameworkset.elasticsearch.ElasticSearchHelper;
import org.frameworkset.elasticsearch.client.ClientInterface;
import org.frameworkset.elasticsearch.entity.ESDatas;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author wangjingyuan
 */
@RestController
@RequestMapping("/logger")
public class LogController extends BaseController {

    @Autowired
    private ILogService logService;

    @GetMapping("/list")
    public TableDataInfo list(DataParam dataParam) {
        TableDataInfo tableDataInfo = logService.list(dataParam);
        return getDataTable(tableDataInfo.getRows(), tableDataInfo.getTotal());
    }

    @GetMapping("/eChart")
    public AjaxResult eChart(DataParam dataParam) {
        return AjaxResult.success(logService.queryBar(dataParam));
    }


}
