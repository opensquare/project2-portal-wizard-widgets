<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
	<xsl:output method="html" encoding="UTF-8"/>
   <xsl:template match="/">
       <xsl:apply-templates select="/pactresponse/entity/IdentifiedEntity"/>
   </xsl:template>
	<xsl:template match="/pactresponse/entity/IdentifiedEntity">
		<section id="cp-banner">
		<h1><a href="/logout" title="Logout and return"></a></h1>	
		<h2><b><xsl:value-of select="description"/>'s</b> customer portal</h2>
		<a id="header-logout" href="/logout">Logout</a>
	</section>
	 </xsl:template>
</xsl:stylesheet>
