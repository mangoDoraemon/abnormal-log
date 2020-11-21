package com.asiainfo.abnormallog.entity.vo;

import java.io.Serializable;

/**
 * @author wangjingyuan
 */
public class BarData implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer totalSize;

    private String dateTime;

    public Integer getTotalSize() {
        return totalSize;
    }

    public void setTotalSize(Integer totalSize) {
        this.totalSize = totalSize;
    }

    public String getDateTime() {
        return dateTime;
    }

    public void setDateTime(String dateTime) {
        this.dateTime = dateTime;
    }
}
