<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="html"/>
	<xsl:template match="/">
		<div>
			<xsl:attribute name="class">pactAgreement agreement status-<xsl:value-of select="agreement/properties/Property[@name='status']"/></xsl:attribute>
			<xsl:attribute name="uid"><xsl:value-of select="agreement/uid"/></xsl:attribute>
			<xsl:variable name="agreementIDBase">
				<xsl:value-of select="translate(agreement/relationship, ' ', '_')"/>
			</xsl:variable>
			<xsl:variable name="effectiveTime">
				<xsl:value-of select="agreement/effectiveTime"/>
			</xsl:variable>
			<xsl:attribute name="id"><xsl:value-of select="$agreementIDBase"/></xsl:attribute>
			<xsl:apply-templates select="agreement/description"/>
            <!--div class="widget" name="scp-pact-actions">
                <xsl:attribute name="params">agreementUid=<xsl:value-of select="agreement/uid"/><xsl:if test="$effectiveTime != ''">&amp;effectiveTime=<xsl:value-of select="$effectiveTime"/></xsl:if>&amp;viewParams=%3Cdepth%3E0%3C/depth%3E%3CsuppressInternalActions%3Etrue%3C/suppressInternalActions%3E</xsl:attribute>
                <xsl:attribute name="id"><xsl:value-of select="$agreementIDBase"/>-actions</xsl:attribute>
                ...
            </div-->
			<xsl:apply-templates select="agreement/uplink"/>
			<!--a href="javascript:void(0)" class="historyLink ui-button">
				<xsl:attribute name="onclick">issueUpdate("timelineRequested('<xsl:value-of select="agreement/uid"/>')")</xsl:attribute>View Agreement History</a-->
			<xsl:apply-templates select="agreement">
				<xsl:with-param name="topLevel" select="'true'"/>
				<xsl:with-param name="agreementIDBase" select="$agreementIDBase"/>
			</xsl:apply-templates>
		</div>
	</xsl:template>
	<xsl:template match="/agreement/description">
		<h1 class="agreementDescription widget-title ui-themed">
			<xsl:attribute name="uid"><xsl:value-of select="../uid"/></xsl:attribute>
			<xsl:attribute name="title"><xsl:value-of select="translate(../relationship, ' ', '_')"/></xsl:attribute>
			<xsl:attribute name="id"><xsl:value-of select="translate(../relationship, ' ', '_')"/>-title</xsl:attribute>
			<xsl:value-of select="."/>
		</h1>
	</xsl:template>
	<xsl:template match="/agreement">
		<xsl:param name="topLevel"/>
		<xsl:param name="agreementIDBase"/>
		<div>
			<xsl:if test="properties/*">
				<div class="pageSection properties">
					<xsl:attribute name="id"><xsl:value-of select="$agreementIDBase"/>-properties</xsl:attribute>
					<h2 class="ui-themed">
						<xsl:attribute name="id"><xsl:value-of select="$agreementIDBase"/>-properties-title</xsl:attribute>
						Properties
					</h2>
					<xsl:apply-templates select="properties">
						<xsl:with-param name="cols">2</xsl:with-param>
					</xsl:apply-templates>
				</div>
			</xsl:if>
			<xsl:if test="subEntities/entity">
				<div class="pageSection subEntities">
					<xsl:attribute name="id"><xsl:value-of select="$agreementIDBase"/>-subEntities</xsl:attribute>
					<h2 class="ui-themed">
						<xsl:attribute name="id"><xsl:value-of select="$agreementIDBase"/>-subEntities-title</xsl:attribute>
						Sub-Entities
					</h2>
					<xsl:apply-templates select="subEntities/entity">
						<xsl:with-param name="context">icon</xsl:with-param>
						<xsl:with-param name="agreementIDBase" select="$agreementIDBase"/>
						<xsl:sort select="relationship"/>
					</xsl:apply-templates>
				</div>
			</xsl:if>
			<xsl:if test="subAgreements/agreement">
				<div class="pageSection subAgreements">
					<xsl:attribute name="id"><xsl:value-of select="$agreementIDBase"/>-subAgreements</xsl:attribute>
					<h2 class="ui-themed">
						<xsl:attribute name="id"><xsl:value-of select="$agreementIDBase"/>-subAgreements-title</xsl:attribute>
						Sub-Agreements
					</h2>
					<xsl:apply-templates select="subAgreements/agreement">
						<xsl:sort select="relationship"/>
					</xsl:apply-templates>
				</div>
			</xsl:if>
			<xsl:if test="selectedEntities/*">
				<div class="pageSection selectedEntities">
					<xsl:attribute name="id"><xsl:value-of select="$agreementIDBase"/>-selectedEntities</xsl:attribute>
					<h2 class="ui-themed">
						<xsl:attribute name="id"><xsl:value-of select="$agreementIDBase"/>-selectedEntities-title</xsl:attribute>
						Selected-Entities
					</h2>
					<xsl:apply-templates select="selectedEntities/*">
						<xsl:with-param name="context">icon</xsl:with-param>
						<xsl:with-param name="agreementIDBase" select="$agreementIDBase"/>
					</xsl:apply-templates>
				</div>
			</xsl:if>
			<!--xsl:if test="agreementRoles/agreementRole">
				<div class="pageSection agreementsRoles">
					<h2 class="ui-themed">Agreement Roles</h2>
					<xsl:apply-templates select="agreementRoles/agreementRole"/>
				</div>
			</xsl:if>
			<xsl:if test="partyRoles/partyRole">
				<div class="pageSection partyRoles">
					<h2 class="ui-themed">Party Roles</h2>
					<xsl:apply-templates select="partyRoles/partyRole"/>
				</div>
			</xsl:if-->
			<xsl:if test="accounts/account">
				<div class="pageSection accounts">
					<h2 class="ui-themed">Accounts</h2>
					<span class="property-label"></span>
					<xsl:apply-templates select="accounts/account"/>
				</div>
			</xsl:if>
		</div>
	</xsl:template>
	<xsl:template match="entity">
		<xsl:param name="agreementIDBase"/>
		<div class="entity icon ui-helper-clearfix">
			<div class="widget" name="displayAgreement">
				<xsl:attribute name="params">agreementUid=<xsl:value-of select="uid"/>&amp;viewParams=%3Cdepth%3E1%3C/depth%3E</xsl:attribute>
			...</div>
		</div>
	</xsl:template>
	<!-- Selected Entity -->
	<xsl:template match="selectedEntities/*">
		<div class="icon">
			<xsl:call-template name="agreementLink">
				<xsl:with-param name="uid" select="uid"/>
				<xsl:with-param name="text">
					<xsl:value-of select="description"/>
				</xsl:with-param>
				<xsl:with-param name="classes">
					<xsl:value-of select="relationship"/>
				</xsl:with-param>
				<xsl:with-param name="context" select="/agreement/entityType"/>
			</xsl:call-template>
		</div>
	</xsl:template>
	<!-- Sub Agreements -->
	<xsl:template match="subAgreements/agreement">
		<div class="subAgreement">
			<div class="widget" name="displayAgreement">
				<xsl:attribute name="params">agreementUid=<xsl:value-of select="uid"/>&amp;viewParams=%3Cdepth%3E1%3C/depth%3E</xsl:attribute>
			...</div>
		</div>
	</xsl:template>
	<!-- Properties -->
	<xsl:template match="properties">
		<xsl:param name="cols"/>
		<xsl:variable name="excludeProperties">entityType,classType,defaultDepth,accountNumber,sortCode</xsl:variable>
		<xsl:for-each select="./*[not(contains(., '{'))][not(contains($excludeProperties, @name))][position() mod $cols = 1]">
			<!--	<div>	-->
			<xsl:apply-templates select=".|following-sibling::*[not(contains(., '{'))][not(contains($excludeProperties, @name))][position() &lt; $cols]"/>
			<!--	</div>	-->
		</xsl:for-each>
	</xsl:template>
	<xsl:template match="properties/*">
		<xsl:variable name="agreementIDFull">
			<xsl:value-of select="../../relationship"/>-<xsl:value-of select="@name"/>
		</xsl:variable>
		<div class="property-group">
			<xsl:attribute name="id"><xsl:value-of select="$agreementIDFull"/></xsl:attribute>
			<span class="property-label">
				<xsl:attribute name="id"><xsl:value-of select="$agreementIDFull"/>-label</xsl:attribute>
				<xsl:value-of select="@name"/>
			</span>
			<span class="property-value">
				<xsl:attribute name="id"><xsl:value-of select="$agreementIDFull"/>-value</xsl:attribute>
				<xsl:value-of select="text()"/>
			</span>
		</div>
		<xsl:if test="$agreementIDFull='motorInsuranceSection-costPerMile'">
			<xsl:variable name="costPerMileIncIPT">
				<xsl:value-of select="../*[@name='iptRate']"/>
			</xsl:variable>

			<div class="property-group" id="motorInsuranceSection-costPerMileIncIPT">
				<span class="property-label" id="motorInsuranceSection-costPerMileIncIPT-label">costPerMileIncIPT</span>
				<span class="property-value" id="motorInsuranceSection-costPerMileIncIPT-value">
					<!-- xsl:value-of select="text()"/>tes<xsl:value-of select="$costPerMileIncIPT"/ -->
					<xsl:value-of select="format-number(text() * (1.0 + $costPerMileIncIPT), '0.0000')"/>
				</span>
			</div>

		</xsl:if>
	</xsl:template>
	<!-- Agreement Roles -->
	<xsl:template match="agreementRole">
		<div class="agreementitem">
			<h3>
				<xsl:call-template name="agreementLink">
					<xsl:with-param name="uid" select="assocUid"/>
					<xsl:with-param name="text" select="description"/>
					<xsl:with-param name="context" select="/agreement/entityType"/>
				</xsl:call-template>
			</h3>
			<xsl:if test="selectedEntities/*">
				<div class="selectedEntities">
					<!--h3>Selected Entities</h3-->
					<xsl:apply-templates select="selectedEntities/*"/>
				</div>
			</xsl:if>
		</div>
	</xsl:template>
	<!-- Party Roles -->
	<xsl:template match="partyRole">
		<div class="icon">
			<xsl:call-template name="agreementLink">
				<xsl:with-param name="uid" select="assocUid"/>
				<xsl:with-param name="text">
					<xsl:value-of select="concat(description , ' (', relationship, ')')"/>
				</xsl:with-param>
				<xsl:with-param name="classes">partyRole</xsl:with-param>
				<xsl:with-param name="context">
					<xsl:value-of select="entityType"/>
				</xsl:with-param>
				<!--
				<xsl:with-param name="context" select="/agreement/entityType"/>
				-->
			</xsl:call-template>
		</div>
	</xsl:template>
	<!-- Available Actions -->
	<xsl:template match="action">
		<li>
			<xsl:choose>
				<xsl:when test="enabled='true'">
					<a>
						<xsl:attribute name="href">showActionForm.do?actionUid=<xsl:value-of select="uid"/><xsl:apply-templates select="params/param"/></xsl:attribute>
						<xsl:value-of select="substring-before(concat(description,':'),':')"/>
						<br/>
					</a>
				</xsl:when>
				<xsl:otherwise>
					<div class="disabledAction">
						<xsl:value-of select="substring-before(concat(description,':'),':')"/>
						<br/>
					</div>
				</xsl:otherwise>
			</xsl:choose>
		</li>
	</xsl:template>
	<!-- Sub Agreements -->
	<xsl:template match="subAgreement">
		<div class="agreementitem">
			<a>
				<xsl:attribute name="href">showAgreement.do?agreementUid=<xsl:value-of select="uid"/></xsl:attribute>
				<xsl:value-of select="substring-before(concat(description,':'),':')"/>
			</a>
		</div>
	</xsl:template>
	<!-- Accounts -->
	<xsl:template match="account">
		<span class="account">
			<xsl:call-template name="accountLink">
				<xsl:with-param name="uid" select="uid"/>
				<xsl:with-param name="text" select="description"/>
				<xsl:with-param name="classes">account</xsl:with-param>
			</xsl:call-template>
		</span>
	</xsl:template>
	<xsl:template match="param">&amp;<xsl:value-of select="@name"/>=<xsl:value-of select="text()"/>
	</xsl:template>
	<xsl:template match="uplink">
		<xsl:call-template name="agreementLink">
			<xsl:with-param name="uid" select="uid"/>
			<xsl:with-param name="text">Up to <xsl:value-of select="description"/>
			</xsl:with-param>
			<xsl:with-param name="context">
				<xsl:value-of select="/agreement/entityType"/>
			</xsl:with-param>
			<xsl:with-param name="classes">ui-button uplink</xsl:with-param>
		</xsl:call-template>
	</xsl:template>
	<xsl:template name="agreementLink">
		<xsl:param name="uid"/>
		<xsl:param name="text"/>
		<xsl:param name="context"/>
		<xsl:param name="classes"/>
		<a href="#" class="{$classes}" action="displayAgreement">
			<xsl:attribute name="uid"><xsl:value-of select="$uid"/></xsl:attribute>
			<xsl:value-of select="$text"/>
		</a>
	</xsl:template>
	<xsl:template name="accountLink">
		<xsl:param name="uid"/>
		<xsl:param name="text"/>
		<a class="popup" action="selectAccount">
            <xsl:attribute name="href">#account/show/<xsl:value-of select="$uid"/></xsl:attribute>
			<xsl:attribute name="uid"><xsl:value-of select="$uid"/></xsl:attribute>
			<xsl:value-of select="$text"/>
		</a>
	</xsl:template>
</xsl:stylesheet>
