<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="xml"/>
	<xsl:template match="/">
		<agreement>
			<uid>
				<xsl:value-of select="/pactresponse/entity/TimeSpanEntity/identifier/uid"/>
			</uid>
			<effectiveTime><xsl:value-of select="/pactresponse/event/TimePoint/EffectiveTime"/></effectiveTime>
			<description>
				<xsl:value-of select="/pactresponse/entity/TimeSpanEntity/description"/>
			</description>
			<entityType><xsl:value-of select="/pactresponse/entity/TimeSpanEntity/TimeSpanEntityVersion/entityType"/></entityType>
			<relationship><xsl:value-of select="/pactresponse/entity/TimeSpanEntity/identifier/relationship"/></relationship>
			<properties>
				<xsl:apply-templates select="/pactresponse/entity/TimeSpanEntity/TimeSpanEntityVersion/Status"/>
				<xsl:apply-templates select="/pactresponse/entity/TimeSpanEntity/TimeSpanEntityVersion/Properties/*">
					<xsl:sort select="@name"/>
				</xsl:apply-templates>
			</properties>
			<xsl:apply-templates select="/pactresponse/entity/TimeSpanEntity/TimeSpanEntityVersion/Parts"/>
		</agreement>
	</xsl:template>
	<xsl:template match="Parts">
		<selectedEntities>
			<xsl:apply-templates select="identifier/selectidentifier"/>
		</selectedEntities>
		<subAgreements>
			<xsl:apply-templates select="identifier[idType='com.osl.pact.finserv.agreement.Agreement']">
				<xsl:sort select="description" />
			</xsl:apply-templates>
		</subAgreements>
		<subEntities>
			<xsl:apply-templates select="identifier[idType='com.osl.pact.entity.timespan.TSEntity']">
				<xsl:sort select="description" />
			</xsl:apply-templates>
		</subEntities>
		<accounts>
			<xsl:apply-templates select="identifier[idType='com.osl.pact.finserv.agreement.PartyAccount']"/>
			<xsl:apply-templates select="identifier[idType='com.osl.pact.finserv.fintran.RequestAccumulator']"/>
		</accounts>
	</xsl:template>
	<!-- Sub Agreements -->
	<xsl:template match="identifier[idType='com.osl.pact.finserv.agreement.Agreement']">
		<agreement>
			<uid>
				<xsl:value-of select="uid"/>
			</uid>
			<effectiveTime><xsl:value-of select="/pactresponse/event/TimePoint/EffectiveTime"/></effectiveTime>
			<description>
				<xsl:value-of select="description"/>
			</description>
			<entityType><xsl:value-of select="TimeSpanEntityVersion/entityType"/></entityType>
			<xsl:apply-templates select="partOf"/>
			<relationship><xsl:value-of select="relationship"/></relationship>
			<properties>
				<xsl:apply-templates select="TimeSpanEntityVersion/Status"/>
				<xsl:apply-templates select="TimeSpanEntityVersion/Properties/*">
					<xsl:sort select="@name"/>
				</xsl:apply-templates>
			</properties>
			<xsl:apply-templates select="TimeSpanEntityVersion/Parts"/>
		</agreement>
	</xsl:template>
	<!-- Sub Entity -->
	<xsl:template match="identifier[idType='com.osl.pact.entity.timespan.TSEntity']">
		<entity>
			<uid>
				<xsl:value-of select="uid"/>
			</uid>
			<description>
				<xsl:value-of select="description"/>
			</description>
			<relationship><xsl:value-of select="relationship"/></relationship>
			<entityType><xsl:value-of select="entityType"/></entityType>
			<properties>
				<xsl:apply-templates select="TimeSpanEntityVersion/Status"/>
				<xsl:apply-templates select="TimeSpanEntityVersion/Properties/*">
					<xsl:sort select="@name"/>
				</xsl:apply-templates>
			</properties>
		</entity>
	</xsl:template>
	<!-- Accounts -->
	<xsl:template match="identifier[idType='com.osl.pact.finserv.agreement.PartyAccount']">
		<account>
			<uid>
				<xsl:value-of select="uid"/>
			</uid>
			<description>
				<xsl:value-of select="relationship"/>
			</description>
		</account>
	</xsl:template>
	<xsl:template match="identifier[idType='com.osl.pact.finserv.fintran.RequestAccumulator']">
		<account>
			<uid>
				<xsl:value-of select="uid"/>
			</uid>
			<description>
				<xsl:value-of select="relationship"/>
			</description>
		</account>
	</xsl:template>
	<!-- Properties -->
	<xsl:template match="Properties/*">
		<xsl:element name="{name()}">
			<xsl:attribute name="name"><xsl:value-of select="@name"/></xsl:attribute>
			<xsl:value-of select="text()"/>
		</xsl:element>
	</xsl:template>
	<xsl:template match="Status">
		<Property name="status"><xsl:value-of select="."/></Property>
	</xsl:template>
	<xsl:template match="partOf">
		<uplink>
			<uid>
				<xsl:value-of select="identifier/uid"/>
			</uid>
			<description><xsl:value-of select="description"/></description>
		</uplink>
	</xsl:template>
</xsl:stylesheet>
