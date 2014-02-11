<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="2.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="xml" encoding="UTF-8" />
    <xsl:template match="/">
        <QuotesPlanList>
            <SinglePaymentQuotes>
                <xsl:apply-templates select="//QuotesPlanList/QuotesPlan[QuoteType='singlePayment']"/>
            </SinglePaymentQuotes>
            <MonthlyPaymentQuotes>
                <xsl:apply-templates select="//QuotesPlanList/QuotesPlan[QuoteType='monthlyPayment']"/>
            </MonthlyPaymentQuotes>
        </QuotesPlanList>
    </xsl:template>
    <xsl:template match="QuotesPlan">
        <xsl:copy-of select="."/>
    </xsl:template>
</xsl:stylesheet>