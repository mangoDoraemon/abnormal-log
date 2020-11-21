package com.asiainfo.abnormallog.entity.vo;

import java.io.Serializable;
import java.util.Date;

/**
 * @author wangjingyuan
 */
public class DataInfo implements Serializable {

    private static final long serialVersionUID = 1L;

    private String message;
    private String timeStamp;
    private String type;

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(String timeStamp) {
        this.timeStamp = timeStamp;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
