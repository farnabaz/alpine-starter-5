---
title: Nuxt Studio Editor content bug reproduction
---

I think the bug occurs when backticks or component content is between italic/bold or similar.

# No issue (execpt that the `glossaire` id prop is replaced by `#`) but it's ok (this is the markdown syntax for HTML anchor using id)

::callout
This is a callout demonstrating that backticks (or components) works fine when not between italic/bold or similar. The following "Lorem and glossaire component" should remain untouched: Lorem :glossaire{id="administrateur" singular}.

No content removed when accessing Review page.
::

# Content removed

::callout
This is a callout demonstrating that backticks (or components) gets removed when orginally edited from VSCode. The following "Lorem and glossaire component" should remain untouched: _Using italic `Lorem` :glossaire{id="administrateur" singular}_.

Access the Review page. When the bug occurs, the "Lorem" is removed and the content is now "[...] untouched: _Using italic Lorem_."
::

# Trying with the markdown version of id (maybe it is working ?)

::callout
This is a callout demonstrating that backticks (or components) gets removed when orginally edited from VSCode. The following "Lorem and glossaire component" should remain untouched: _Using italic `Lorem` :glossaire{#administrateur singular}_.

Access the Review page. When the bug occurs, the "Lorem" is removed and the content is now "[...] untouched: _Using italic Lorem_."
::
