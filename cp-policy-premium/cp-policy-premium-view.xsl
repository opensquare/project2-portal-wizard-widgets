<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
	<xsl:output method="xml" encoding="UTF-8"/>
   <xsl:template match="/">
        <xsl:apply-templates select="/pactresponse/entity/Posting"/>
   </xsl:template>
	<xsl:template match="/pactresponse/entity/Posting">
	<xsl:variable name="payDate"><xsl:value-of select="TimePoint/EffectiveTime"/></xsl:variable>
		<div id="cp-policy-summary-premium" class="pane">
			<span class="title">Cover Level</span>
			<span class="premium-due">
				<xsl:value-of select="tokenize(amount, ' ')[1]"/>
			</span>
			<span class="premium-unit">
				<xsl:value-of select="tokenize(amount, ' ')[2]"/>
			</span>
		</div>
	</xsl:template>
</xsl:stylesheet>