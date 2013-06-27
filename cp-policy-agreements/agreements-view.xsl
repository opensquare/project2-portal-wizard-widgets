<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
	<xsl:output method="html" encoding="UTF-8"/>
   <xsl:template match="/">
       <xsl:apply-templates select="/pactresponse/entity/IdentifiedEntity"/>
   </xsl:template>
	<xsl:template match="/pactresponse/entity/IdentifiedEntity">
		<article>
			<xsl:attribute name="class">cp-policy <xsl:value-of select="tokenize(description, '\|')[2]"/></xsl:attribute>
            <xsl:attribute name="onclick">location.href='<xsl:value-of select="tokenize(description, '\|')[3]"/>'</xsl:attribute>
            <h2><xsl:value-of select="tokenize(description, '\|')[1]"/></h2>
			<p>View the details of your policy here.</p>
		</article>
	</xsl:template>
</xsl:stylesheet>
