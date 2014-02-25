<%@ page import="org.apache.shiro.SecurityUtils" %>
<%@ page import="org.apache.shiro.subject.Subject" %>
<%@ page import="com.osl.security.OslPrinciple" %>

<%

Subject user = SecurityUtils.getSubject();
OslPrinciple principle = user.getPrincipals().oneByType(OslPrinciple.class);
String accessToken = principle.getAtttributes().get("accessToken");

%>

        <input type="hidden" name="accessToken" id="accessToken" value="<%=accessToken%>"/>

		<div class="rhinoforms rhinoforms-quote-formContainer"/>

		<script src="{widgetPath}/js/utils.js" ></script>
