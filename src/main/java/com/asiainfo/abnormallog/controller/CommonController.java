package com.asiainfo.abnormallog.controller;

import com.asiainfo.abnormallog.utils.date.DateUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * @author wangjingyuan
 */
@Controller
@RequestMapping("/abnormal")
public class CommonController {

    @RequestMapping("/log")
    public String common() {

        return "index";
    }

    @RequestMapping("/log1")
    public void common1(HttpServletResponse response) throws IOException {
       response.sendRedirect("/index.html#/resource");

    }


}
