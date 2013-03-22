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
			<tr>
				<td><xsl:value-of select="TimePoint/EffectiveTime"/></td><td><xsl:value-of select="description"/></td><td><xsl:value-of select="amount"/></td>
			</tr>
	</xsl:template>
</xsl:stylesheet>