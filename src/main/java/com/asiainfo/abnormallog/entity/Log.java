package com.asiainfo.abnormallog.entity;


import com.fasterxml.jackson.annotation.JsonProperty;
import com.frameworkset.orm.annotation.Column;
import org.frameworkset.elasticsearch.entity.ESBaseData;

import java.util.Date;

/**
 * @author wangjingyuan
 */
public class Log extends ESBaseData {

    @JsonProperty("MESSAGE")
    private String message;

    @JsonProperty("HOSTNAME")
    private String hostName;

    @Column(dataformat = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",timezone = "Etc/UTC",locale = "zh")
    @JsonProperty("TIMESTAMP")
    private Date timeStamp;

    @JsonProperty("VERSION")
    private String versions;

    @JsonProperty("SOURCE")
    private String source;

    @JsonProperty("OFFSET")
    private long offSet;

    @JsonProperty("INPUT_TYPE")
    private String inputType;

    @JsonProperty("TYPE")
    private String logType;

    @JsonProperty("NAME")
    private String name;

    public Log() {
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getHostName() {
        return hostName;
    }

    public void setHostName(String hostName) {
        this.hostName = hostName;
    }

    public Date getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(Date timeStamp) {
        this.timeStamp = timeStamp;
    }

    public String getVersions() {
        return versions;
    }

    public void setVersions(String versions) {
        this.versions = versions;
    }

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public long getOffSet() {
        return offSet;
    }

    public void setOffSet(long offSet) {
        this.offSet = offSet;
    }

    public String getInputType() {
        return inputType;
    }

    public void setInputType(String inputType) {
        this.inputType = inputType;
    }

    public String getLogType() {
        return logType;
    }

    public void setLogType(String logType) {
        this.logType = logType;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
