<?php

/* modular/download.html.twig */
class __TwigTemplate_8b748bf4797cb3a25ab54b1d7660eff5390989cbd434957f94572ee4698e43cc extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<!-- Download Section -->
<section id=\"download\" class=\"content-section text-center\">
    <div class=\"download-section\">
        <div class=\"container\">
            <div class=\"col-lg-8 col-lg-offset-2\">
            \t";
        // line 6
        echo $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "content", array());
        echo "
                <a href=\"";
        // line 7
        echo $this->getAttribute($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "header", array()), "button_url", array());
        echo "\" class=\"btn btn-default btn-lg\">";
        echo $this->getAttribute($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "header", array()), "button_text", array());
        echo "</a>
            </div>
        </div>
    </div>
</section>";
    }

    public function getTemplateName()
    {
        return "modular/download.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  30 => 7,  26 => 6,  19 => 1,);
    }
}
/* <!-- Download Section -->*/
/* <section id="download" class="content-section text-center">*/
/*     <div class="download-section">*/
/*         <div class="container">*/
/*             <div class="col-lg-8 col-lg-offset-2">*/
/*             	{{ page.content }}*/
/*                 <a href="{{ page.header.button_url }}" class="btn btn-default btn-lg">{{ page.header.button_text }}</a>*/
/*             </div>*/
/*         </div>*/
/*     </div>*/
/* </section>*/
