<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
	<xsl:output method="html" encoding="UTF-8"/>
    <xsl:template match="/">
        <xsl:apply-templates select="/pactresponse/entity/IdentifiedEntity"/>
    </xsl:template>
	<xsl:template match="/pactresponse/entity/IdentifiedEntity">
		<article>
            <xsl:attribute name="onclick">location.href='<xsl:value-of select="description"/>?product=<xsl:value-of select="name"/>'</xsl:attribute>
			<h2>Get a <xsl:value-of select="name"/> quote</h2>
			<p>Tell us your details and let us get you a price online.  You can even buy and be on cover in minutes.</p>
		</article>
	</xsl:template>
</xsl:stylesheet>
