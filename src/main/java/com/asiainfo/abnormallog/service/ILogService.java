package com.asiainfo.abnormallog.service;

import com.asiainfo.abnormallog.core.page.TableDataInfo;
import com.asiainfo.abnormallog.entity.vo.DataParam;

import java.util.Map;

/**
 * @author wangjingyuan
 */
public interface ILogService {
    /**
     * 分页查询数据
     * @param dataParam
     * @return
     */
    TableDataInfo list(DataParam dataParam);

    Map<String,Object> queryBar(DataParam dataParam);
}
