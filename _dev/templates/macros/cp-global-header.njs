{% macro active(activePage='') %}
	<header class="global-header">
	<div class="container">
		<a href="/" {% if activePage == 'bio' %} class="active" {% endif %}>Bio</a>
		<a href="expertise.html" {% if activePage == 'expertise' %} class="active" {% endif %}>Expertise</a>
		<a href="clients.html" {% if activePage == 'clients' %} class="active" {% endif %}>Clients</a>
		<a href="contact.html" {% if activePage == 'contact' %} class="active" {% endif %}>Contact</a>
	</div>
	</header>
{% endmacro %}