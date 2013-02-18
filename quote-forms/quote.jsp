<script>
    var initialData;
    <% 
        String calcRef = request.getParameter("ref");
        if(calcRef!=null && !calcRef.equals("{ref}")){
            %>
            initialData = "<quote><calcref><%=calcRef%></calcref></quote>";
            <%
        }
    %>
    rf.loadFlow('widgets/quote-forms/new-quote-flow.js', $('.rhinoforms-quote-formContainer'), initialData)
</script>
<script src="{widgetPath}/js/utils.js" ></script>
<div class="rhinoforms-quote-formContainer"/>
