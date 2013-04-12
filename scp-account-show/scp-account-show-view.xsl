<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="xml" omit-xml-declaration="yes"/>
	<xsl:strip-space elements="*"/>
	<xsl:template match="/account">
		<!--div id="actions">
			<h1 class="titlebar">Actions</h1>
			<ul>
				<xsl:apply-templates select="actions/action">
					<xsl:sort select="description"/>
				</xsl:apply-templates>
			</ul>
			<xsl:apply-templates select="uplink"/>
		</div-->
		<div class="pactAccount">
			<h1 class="titlebar">
				<xsl:value-of select="description"/>
			</h1>
			<h3 class="balance">Balance: <xsl:value-of select="balance"/></h3>
			<div class="transactionsSection">
				<div class="transactions">
					<table>
						<tr>
							<th class="effectiveDate">Effective Date</th>
							<th class="description">Description</th>
							<th class="amount">Amount</th>
						</tr>
						<xsl:apply-templates select="postings/posting">
							<xsl:sort select="seq" order="descending" data-type="number"/>
						</xsl:apply-templates>
					</table>
				</div>
			</div>
		</div>
	</xsl:template>
	<xsl:template match="posting">
		<tr class="transaction">
		<xsl:attribute name="class">
			<xsl:choose>
				<xsl:when test="number(translate(amount, ',', '')) &gt; 0">transaction credit</xsl:when>
				<xsl:otherwise>transaction debit</xsl:otherwise>
			</xsl:choose>
			</xsl:attribute>
			<td class="effectiveDate">
				<xsl:value-of select="EffectiveTime"/>
			</td>
			<td class="description">
				<xsl:value-of select="substring-before(concat(description, '|'), '|')"/>
				<xsl:if test="string-length(substring-after(description, '-  -')) &gt; 0" >
					<xsl:value-of select="concat(' - ', substring-after(description, '-  -'))"/>
				</xsl:if>
			</td>
			<td class="amount">
				<xsl:value-of select="amount"/>
			</td>
		</tr>
	</xsl:template>
	<xsl:template match="balance">
		<tr>
			<td>Balance</td>
			<td>
				<xsl:value-of select="text()"/>
			</td>
		</tr>
		<tr>
			<td>Effective Time</td>
			<td>
				<xsl:value-of select="/account/timepoint/effectiveTime"/>
			</td>
		</tr>
	</xsl:template>
	<xsl:template match="value">
		<tr>
			<td>value</td>
			<td>
				<xsl:value-of select="substring-before(concat(text(), '|'), '|')"/>
			</td>
		</tr>
	</xsl:template>
</xsl:stylesheet>
