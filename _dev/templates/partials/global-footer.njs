<div class="global-footer">
	<div class="container">
		<div class="flex-container space-between">
		{% for item in contactLeadin %}
			<div><a href='{{ item.emailUrl }}'>{{ item.email }}</a> <a href='{{ item.linkedUrl }}'>{{ item.linked }}</a></div>
		{% endfor %}
			{#<div><a href="ember">site in ember.js</a> <a href="/react">site in react.js</a></div>#}
		</div>

	</div>
</div>