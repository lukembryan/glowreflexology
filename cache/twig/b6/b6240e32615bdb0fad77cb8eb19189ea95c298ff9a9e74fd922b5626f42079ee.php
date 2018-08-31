<?php

/* modular/about.html.twig */
class __TwigTemplate_392a4f377c727ba75983dfd346d0b0d01e9edfb5158cd0431e2ffb45a9f22c11 extends Twig_Template
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
        echo "<!-- About Section -->
<section id=\"about\" class=\"container content-section text-center\">
    <div class=\"row\">
        <div class=\"col-lg-8 col-lg-offset-2\">
            ";
        // line 5
        echo $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "content", array());
        echo "
        </div>
    </div>
</section>";
    }

    public function getTemplateName()
    {
        return "modular/about.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  25 => 5,  19 => 1,);
    }
}
/* <!-- About Section -->*/
/* <section id="about" class="container content-section text-center">*/
/*     <div class="row">*/
/*         <div class="col-lg-8 col-lg-offset-2">*/
/*             {{ page.content }}*/
/*         </div>*/
/*     </div>*/
/* </section>*/
