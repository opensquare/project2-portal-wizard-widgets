<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="xml" version="1.0" encoding="UTF-8" indent="yes" omit-xml-declaration="yes"/>
    <xsl:template match="@*|node()">
        <xsl:copy>
            <xsl:apply-templates select="@*|node()[not(identifier/assocIdentifier/relationship='service')]"/>
            <xsl:apply-templates select="IdentifiedEntity[identifier/assocIdentifier/relationship='service']">
                <xsl:sort select="description"/>
            </xsl:apply-templates>
        </xsl:copy>
    </xsl:template>
    <xsl:template match="IdentifiedEntity[identifier/assocIdentifier/relationship='service']" >
            <IdentifiedEntity>
                <xsl:copy-of select="*"/>
                <vehicleDescription><xsl:value-of select="normalize-space(substring-before(description, '|'))"/></vehicleDescription>
                <serviceDescription><xsl:value-of select="normalize-space(substring-before(substring-after(description, '|'), '|'))"/></serviceDescription>
                <ownerDescription><xsl:value-of select="normalize-space(substring-before(substring-after(substring-after(description, '|'), '|'), '('))"/></ownerDescription>
                <serviceStatus><xsl:value-of select="substring-before(substring-after(description, '('), ')')"/></serviceStatus>
            </IdentifiedEntity>
    </xsl:template>
</xsl:stylesheet>
