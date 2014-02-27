<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
	<xsl:output method="html" encoding="UTF-8"/>
   <xsl:template match="/">
    <div id="quote-list">
        <div class="quotes-header">
            <span class="quote-created">Created</span>
            <span class="vehicle">Vehicle</span>
            <span class="quote-ref">Quote Reference</span>
            <span class="quote-premium">Premium</span>
        </div>
       <xsl:apply-templates select="//*[name()='QuotesPlan']"/>
    </div>
   </xsl:template>
	<xsl:template match="*[name()='QuotesPlan']">
        <xsl:if test="not(*[name() = 'BundleID'] = preceding-sibling::*/*[name()='BundleID'])">
		<div class="quotes-quote">
            <span class="quote-created"><xsl:value-of select="substring-before(*[name()='CreationDate'], 'T')"/></span>
            <span class="vehicle"><xsl:value-of select="*[name()='VehicleReg']"/></span>
            <span class="quote-ref"><xsl:value-of select="*[name()='BundleID']"/></span>
            <span class="quote-premium"><xsl:value-of select="*[name()='TotalPayable']"/></span>
        </div>
        </xsl:if>
	</xsl:template>
</xsl:stylesheet>
