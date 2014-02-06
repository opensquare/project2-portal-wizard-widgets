<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
	<xsl:output method="html" encoding="UTF-8"/>
   <xsl:template match="/">
        <div class="quotes-header">
            <span class="quote-ref">Quote Reference</span>
            <span class="quote-term">Term (Months)</span>
            <span class="quote-premium">Premium</span>
            <span class="quote-buttons"> </span>
        </div>
       <xsl:apply-templates select="//QuotesPlan"/>
   </xsl:template>
	<xsl:template match="QuotesPlan">
		<div class="quotes-quote">
            <span class="quote-ref"><xsl:value-of select="QuoteReference"/></span>
            <span class="quote-term"><xsl:value-of select="PlanTermMonths"/></span>
            <span class="quote-premium"><xsl:value-of select="PlanCost"/></span>
            <span class="quote-buttons"><input type="button" value="View"/><input type="button" value="Buy"/></span>
        </div>
	</xsl:template>
</xsl:stylesheet>
