package com.asiainfo.abnormallog.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * @author wangjingyuan
 */
@Controller
@RequestMapping("/aiops")
public class HtmlController {

    @RequestMapping("/index/004")
    public void virtualMachine(HttpServletResponse response) throws IOException {
        response.sendRedirect("/index.html#/virtualMachine");
    }

    @RequestMapping("/index/008")
    public void resource(HttpServletResponse response) throws IOException {
        response.sendRedirect("/index.html#/resource");
    }

    @RequestMapping("/index/010")
    public void capacity(HttpServletResponse response) throws IOException {
        response.sendRedirect("/index.html#/capacity");
    }

    @RequestMapping("/index/009")
    public void optimization(HttpServletResponse response) throws IOException {
        response.sendRedirect("/index.html#/optimization");
    }

    @RequestMapping("/index/001")
    public void logExcy(HttpServletResponse response) throws IOException {
        response.sendRedirect("/index.html#/logExcy");
    }

    @RequestMapping("/index/002")
    public void analysis(HttpServletResponse response) throws IOException {
        response.sendRedirect("/index.html#/analysis");
    }

    @RequestMapping("/index/007")
    public void robots(HttpServletResponse response) throws IOException {
        response.sendRedirect("/index.html#/robots");
    }

    @RequestMapping("/index/005")
    public void knowledge(HttpServletResponse response) throws IOException {
        response.sendRedirect("/index.html#/knowledge");
    }

    @RequestMapping("/index/006")
    public void complaint(HttpServletResponse response) throws IOException {
        response.sendRedirect("/index.html#/complaint");
    }

}
