<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
	<xsl:output method="html" encoding="UTF-8"/>
   <xsl:template match="/">
    <div id="quote-list">
        <div class="quotes-header">
            <span class="quote-created">Created</span>
            <span class="vehicle">Vehicle</span>
            <span class="quote-ref">Quote Reference</span>
            <span class="start-mileage">Start Mileage</span>
            <span class="end-mileage">End Mileage</span>
            <span class="quote-term">Term (Months)</span>
            <span class="valid-from">Valid From</span>
            <span class="valid-to">Valid To</span>
            <span class="services">Services</span>
            <span class="quote-premium">Premium</span>
            <span class="quote-buttons"> </span>
        </div>
       <xsl:apply-templates select="//*[name()='QuotesPlan']"/>
    </div>
    <div id="popupContainer" style="display:none">
			<div id="popupBackground" onclick="$('#popupContainer').hide()"> </div>
			<div id="popup">
				<a id="popupClose" onclick="$('#popupContainer').hide()">x</a>
				<div id="popupContent"> </div>
			</div>
		</div>
   </xsl:template>
	<xsl:template match="*[name()='QuotesPlan']">
		<div class="quotes-quote">
            <span class="quote-created"><xsl:value-of select="substring-before(*[name()='CreationDate'], 'T')"/></span>
            <span class="vehicle"><xsl:value-of select="*[name()='VehicleReg']"/></span>
            <span class="quote-ref"><xsl:value-of select="*[name()='QuoteReference']"/></span>
            <span class="start-mileage"><xsl:value-of select="*[name()='StartMileage']"/></span>
            <span class="end-mileage"><xsl:value-of select="*[name()='EndMileage']"/></span>
            <span class="quote-term"><xsl:value-of select="*[name()='PlanTermMonths']"/></span>
            <span class="valid-from"><xsl:value-of select="substring-before(*[name()='ValidFrom'], 'T')"/></span>
            <span class="valid-to"><xsl:value-of select="substring-before(*[name()='ValidTo'], 'T')"/></span>
            <span class="services"><xsl:value-of select="*[name()='TotalServicesInPlan']"/></span>
            <span class="quote-premium"><xsl:value-of select="*[name()='PlanCost']"/></span>
            <span class="quote-buttons"><a href="#"><xsl:attribute name="onclick">popWidget('sp-buy-quote', 'ref=<xsl:value-of select="*[name()='QuoteReference']"/>');</xsl:attribute>Buy</a></span>
        </div>
	</xsl:template>
</xsl:stylesheet>
