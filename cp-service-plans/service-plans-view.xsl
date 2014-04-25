<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
    <xsl:output method="html" encoding="UTF-8"/>
    <xsl:template match="/">
        <xsl:choose>
            <xsl:when test="//*[name()='QuotesPlan']/*[name()='QuoteReference']">
                <xsl:if test="count(//*[name()='QuotesPlan']/*[name()='QuoteReference']) &gt; 1">
                <div id="plan-list">
                    <div class="plans-header">
                        <span class="quote-created">Created</span>
                        <span class="vehicle">Vehicle</span>
                        <span class="quote-ref">Quote Reference</span>
                        <span class="valid-from">Valid From</span>
                        <span class="valid-to">Valid To</span>
                        <span class="quote-buttons"/>
                    </div>
                    <xsl:apply-templates select="//*[name()='QuotesPlan']"/>
                </div>
                </xsl:if>
                <div class="widget" name="scp-serviceplan-show" css="serviceplan-show.css" js="serviceplan-show.js">
                    <xsl:attribute name="params">quoteRef=<xsl:value-of select="//*[name()='QuotesPlan']/*[name()='QuoteReference'][1]"/>
                    </xsl:attribute>..</div>
            </xsl:when>
            <xsl:otherwise>
                <div>
                    <p>No plans purchased yet</p>
                </div>
            </xsl:otherwise>
        </xsl:choose>
    </xsl:template>
    <xsl:template match="*[name()='QuotesPlan']">
        <div class="plans-plan">
            <span class="quote-created">
                <xsl:value-of select="substring-before(*[name()='CreationDate'], 'T')"/>
            </span>
            <span class="vehicle">
                <xsl:value-of select="*[name()='VehicleReg']"/>
            </span>
            <span class="quote-ref">
                <xsl:value-of select="*[name()='BundleID']"/>
            </span>
            <span class="valid-from">
                <xsl:value-of select="substring-before(*[name()='ValidFrom'], 'T')"/>
            </span>
            <span class="valid-to">
                <xsl:value-of select="substring-before(*[name()='ValidTo'], 'T')"/>
            </span>
            <span class="quote-buttons">
                <a href="#">
                    <xsl:attribute name="onclick">pw.notifyChannelOfEvent('service-plan-selected', {quoteRef: '<xsl:value-of select="*[name()='QuoteReference']"/>'})</xsl:attribute>Show</a>
            </span>
        </div>
    </xsl:template>
</xsl:stylesheet>
