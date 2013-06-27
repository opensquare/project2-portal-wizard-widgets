<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
	<xsl:output method="xml" encoding="UTF-8"/>
   <xsl:template match="/">
       <xsl:apply-templates select="/pactresponse/entity/IdentifiedEntity"/>
   </xsl:template>
	<xsl:template match="/pactresponse/entity/IdentifiedEntity">
			<p id="cp-policy-details-drivers" class="pane">
				<span class="title">Drivers</span>
				<a>
					<xsl:attribute name="class">driver <xsl:value-of select="tokenize(description, '\|')[3]"/></xsl:attribute>
					 <xsl:value-of select="tokenize(description, '\|')[1]"/>
				 </a>
				<a class="add" href="#mtaForms" title="Add..."></a>
			</p>
	</xsl:template>
</xsl:stylesheet>
