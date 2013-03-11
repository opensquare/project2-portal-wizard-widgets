<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
	<xsl:output method="xml"/>
	<xsl:template match="/">
		<xsl:apply-templates select="/pactresponse/entity/TimeSpanEntity"/>
	</xsl:template>
    <xsl:template match="TimeSpanEntity">
		<div>
            <xsl:attribute name="class">entity entity-<xsl:value-of select="identifier/relationship"/></xsl:attribute>
            <div class="entity-description"><xsl:value-of select="description"/></div>
            <div class="entity-status"><xsl:value-of select="TimeSpanEntityVersion/Status"/></div>
            <div class="entity-properties">
                <xsl:apply-templates select="TimeSpanEntityVersion/Properties/*"/>
            </div>
            <div class="entity-parts">
                <xsl:apply-templates select="TimeSpanEntityVersion/Parts/*"/>
            </div>
        </div>
	</xsl:template>
    <xsl:template match="Properties/*">
        <div>
            <xsl:attribute name="class">entity-property entity-property-type-<xsl:value-of select="name()"/> entity-property-name-<xsl:value-of select="@name"/></xsl:attribute>
            <span class="entity-property-name"><xsl:value-of select="@name"/></span>
            <span class="entity-property-value"><xsl:value-of select="."/></span>
        </div>
    </xsl:template>
</xsl:stylesheet>
