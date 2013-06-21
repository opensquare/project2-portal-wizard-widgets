<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
	<xsl:output method="html" encoding="UTF-8"/>
	<xsl:template match="/">
			<ul>
				<xsl:apply-templates select="/pactresponse/entity/IdentifiedEntity"/>
			</ul>
	</xsl:template>
	<xsl:template match="/pactresponse/entity/IdentifiedEntity">
		<li>
			<a>
				<xsl:attribute name="href"><xsl:value-of select="description"/></xsl:attribute>
				<xsl:value-of select="name"/>
			</a>
		</li>
	</xsl:template>
</xsl:stylesheet>
