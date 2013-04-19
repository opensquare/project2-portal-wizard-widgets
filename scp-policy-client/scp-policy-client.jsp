<section class="content-header-pulldown">
	<div class="widget" name="scp-notes"></div>
</section>
<section class="content-header-pulldown-tabs">
	<span class="notes" onclick="pulldownToggle(this,'scp-notes');">Notes</span>
</section>
<div class="widget" name="scp-pact-actions" params="agreementUid=<%=request.getParameter("uid")%>&amp;viewParams=%3Cdepth%3E0%3C/depth%3E%3CsuppressInternalActions%3Etrue%3C/suppressInternalActions%3E"></div>
<div class="widget" name="displayAgreement" params="agreementUid=<%=request.getParameter("uid")%>"></div>