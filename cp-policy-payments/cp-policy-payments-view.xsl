<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
	<xsl:output method="xml" encoding="UTF-8"/>
   <xsl:template match="/">
   	<table id="cp-policy-payments-table">
		<tr><th>Date</th><th>Description</th><th>Amount</th></tr>
        <xsl:apply-templates select="/pactresponse/entity/Posting"/>
		</table>
   </xsl:template>
	<xsl:template match="/pactresponse/entity/Posting">
	<xsl:variable name="payDate"><xsl:value-of select="TimePoint/EffectiveTime"/></xsl:variable>
		<tr>
			<td><xsl:value-of select="concat(substring-before($payDate, ' '),' ',substring-before(substring-after($payDate, ' '),' '),' ',substring(substring-after(substring-after($payDate, ' '),' '), 1, 4))"/></td>
			<td><xsl:value-of select="tokenize(description, '\|')[4]"/><xsl:value-of select="tokenize(description, '\|')[1]"/>(<xsl:value-of select="tokenize(description, '\|')[3]"/>)</td><td><xsl:value-of select="amount"/></td>
		</tr>
	</xsl:template>
</xsl:stylesheet>