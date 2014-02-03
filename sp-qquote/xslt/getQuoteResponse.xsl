<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="2.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="xml" encoding="UTF-8" />
    <xsl:template match="/">
        <quotes>
            <singlePaymentQuotes>
                <xsl:apply-templates select="//QuotesPlanList/QuotesPlan[QuoteType='singlePayment']"/>
            </singlePaymentQuotes>
            <monthlyPaymentQuotes>
                <xsl:apply-templates select="//QuotesPlanList/QuotesPlan[QuoteType='monthlyPayment']"/>
            </monthlyPaymentQuotes>
        </quotes>
    </xsl:template>
    <xsl:template match="QuotesPlan">
        <quote>
            <reference><xsl:value-of select="QuoteReference"/></reference>
            <deposit><xsl:value-of select="Deposit"/></deposit>
            <premium><xsl:value-of select="PlanCost"/></premium>
        </quote>
    </xsl:template>
</xsl:stylesheet>