<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
	<xsl:output method="xml"/>
	<xsl:template match="/">
		<div>
			<xsl:choose>
				<xsl:when test="/pactresponse/entity/IdentifiedEntity">
					<xsl:apply-templates select="/pactresponse/entity/IdentifiedEntity"/>
				</xsl:when>
				<xsl:otherwise>No records found</xsl:otherwise>
			</xsl:choose>
		</div>
	</xsl:template>
	<xsl:template match="IdentifiedEntity">
        <xsl:variable name="descriptionParts" select="tokenize(description, '\|')"/>
		<div>
            <xsl:attribute name="class"><xsl:value-of select="concat('searchResult', ' ', $descriptionParts[2], ' ', $descriptionParts[3])"/></xsl:attribute>
			<a><xsl:attribute name="href">#policy/show/<xsl:value-of select="identifier/uid"/></xsl:attribute><xsl:value-of select="$descriptionParts[1]"/></a>
		</div>
	</xsl:template>
</xsl:stylesheet>
