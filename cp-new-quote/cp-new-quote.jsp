<%@ page import="com.osl.security.OslPrinciple" %>
<%@ page import="org.apache.shiro.SecurityUtils" %>
<%@ page import="org.apache.shiro.subject.Subject" %>
<%Subject user = SecurityUtils.getSubject();%>
<%OslPrinciple oslPrinciple = user.getPrincipals().oneByType(OslPrinciple.class);%>
<div class="widget" name="sp-qquote" params="productName=ONE Service Plan&amp;accessToken=<%=oslPrinciple.getAtttributes().get("accessToken")%>" css="sp-qquote.css" js="sp-qquote.js"> </div>