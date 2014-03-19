<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
	<xsl:output method="html" encoding="UTF-8"/>
   <xsl:template match="/">
		<xsl:choose>
			<xsl:when test="//*[name()='QuotesPlan']/*[name()='QuoteReference']">
				<div class="widget" name="scp-serviceplan-show" css="serviceplan-show.css" js="serviceplan-show.js"><xsl:attribute name="params">quoteRef=<xsl:value-of select="//*[name()='QuotesPlan']/*[name()='QuoteReference']"/></xsl:attribute>..</div>
			</xsl:when>
			<xsl:otherwise>
				<div>
					<p>No plans purchased yet</p>
				</div>
			</xsl:otherwise>
		</xsl:choose>
   </xsl:template>
</xsl:stylesheet>
