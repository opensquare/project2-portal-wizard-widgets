<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="2.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="xml" encoding="UTF-8" />
    <xsl:template match="/">
        <QuotesPlanList>
            <SinglePaymentQuotes>
                <xsl:apply-templates select="//*[name()='QuotesPlan'][*[name()='QuoteType' and text()='Single']]"/>
            </SinglePaymentQuotes>
            <MonthlyPaymentQuotes>
                <xsl:apply-templates select="//*[name()='QuotesPlan'][*[name()='QuoteType' and text()='Monthly']]"/>
            </MonthlyPaymentQuotes>
        </QuotesPlanList>
    </xsl:template>
    
    <xsl:template match="*">
        <xsl:element name="{local-name()}">
            <xsl:apply-templates select="@* | node()"/>
        </xsl:element>
    </xsl:template>

    <!-- template to copy attributes -->
    <xsl:template match="@*">
        <xsl:attribute name="{local-name()}">
            <xsl:value-of select="."/>
        </xsl:attribute>
    </xsl:template>

    <!-- template to copy the rest of the nodes -->
    <xsl:template match="comment() | text() | processing-instruction()">
        <xsl:copy/>
    </xsl:template>
</xsl:stylesheet>