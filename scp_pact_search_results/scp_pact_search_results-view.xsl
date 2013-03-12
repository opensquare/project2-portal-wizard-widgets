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
		<div class="searchResult">
			<a><xsl:attribute name="href">#policy/show/<xsl:value-of select="identifier/uid"/></xsl:attribute><xsl:value-of select="description"/></a>
		</div>
	</xsl:template>
</xsl:stylesheet>
