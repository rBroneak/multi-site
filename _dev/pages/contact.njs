{% extends "layout.njs" %}
{% block nav %}
	{% import "macros/cp-global-header.njs" as nav %}
	{{nav.active('contact')}}
{% endblock %}
{% block content %}

	<section class="container">
		{% for item in contactLeadin %}
			<h1>{{item.title}}</h1>
			<h2>{{item.intro}}</h2>
			<hr>
		{% endfor %}
		<section class="primary-content">
			{% for item in contactContent %}
				<p>{{  item }}</p>
			{% endfor %}
		</section>
	</section>


{% endblock %}
