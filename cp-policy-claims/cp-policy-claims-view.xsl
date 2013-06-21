<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
	<xsl:output method="html" encoding="UTF-8"/>
   <xsl:template match="/">
       <xsl:apply-templates select="/pactresponse/entity/TimeSpanEntity"/>
       <p id="cp-policy-details-claim" class="pane">
				<span class="title">New</span>
				<a class="claim add">Add...</a>
			</p>

   </xsl:template>
	<xsl:template match="/pactresponse/entity/TimeSpanEntity">

	<xsl:if test="TimeSpanEntityVersion/Status != '0'"> 

		<xsl:variable name="createTime"><xsl:value-of select="TimeSpanEntityVersion/Properties/DateTime[@name='creationTime']"/></xsl:variable>
		<xsl:variable name="createDate"><xsl:value-of select="TimeSpanEntityVersion/Properties/DateTime[@name='creationDate']"/></xsl:variable>
		
		<p id="cp-policy-details-claim" class="pane">
			<xsl:attribute name="title"><xsl:value-of select="TimeSpanEntityVersion/Properties/Property[@name='claimNumber']"/>: <xsl:value-of select="identifier/relationship"/></xsl:attribute>
			<span class="title"><xsl:value-of select="TimeSpanEntityVersion/Status"/></span>
			<a class="claim">
				<xsl:choose>
			    	<xsl:when test="TimeSpanEntityVersion/Properties/DateTime[@name='creationTime']">
			    		<xsl:value-of select="concat(substring-before($createTime, ' '),' ',substring-before(substring-after($createTime, ' '),' '),' ',substring(substring-after(substring-after($createTime, ' '),' '), 1, 4))"/>
			    	</xsl:when>
			    	<xsl:otherwise>
			   			<xsl:value-of select="concat(substring-before($createDate, ' '),' ',substring-before(substring-after($createDate, ' '),' '),' ',substring(substring-after(substring-after($createDate, ' '),' '), 1, 4))"/>
			   		</xsl:otherwise>
			 	</xsl:choose>
			</a>	
		</p>
		
	</xsl:if>	
		
	</xsl:template>
</xsl:stylesheet>
