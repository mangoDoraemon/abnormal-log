package com.asiainfo.abnormallog.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.frameworkset.elasticsearch.entity.ESBaseData;

import java.util.Date;

/**
 * @author wangjingyuan
 */
public class AqLog extends ESBaseData {

    @JsonProperty("MSG")
    private String message;

    @JsonProperty("TIMESTAMP")
    private Date timeStamp;

    @JsonProperty("TYPE")
    private String logType;

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Date getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(Date timeStamp) {
        this.timeStamp = timeStamp;
    }

    public String getLogType() {
        return logType;
    }

    public void setLogType(String logType) {
        this.logType = logType;
    }
}
