<?php

/* modular/header.html.twig */
class __TwigTemplate_898166e4be0b7bd199efeeca5e9f756fd869e8285e7b330e3547255a541b8507 extends Twig_Template
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
        echo "<!-- Intro Header -->
<header class=\"intro\">
    <div class=\"intro-body\">
        <div class=\"container\">
            <div class=\"row\">
                <div class=\"col-md-8 col-md-offset-2\">
                    <h1 class=\"brand-heading\">";
        // line 7
        echo $this->getAttribute($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "header", array()), "title", array());
        echo "</h1>
                    <p class=\"intro-text\">";
        // line 8
        echo $this->getAttribute($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "header", array()), "intro_text", array());
        echo "</p>
                    ";
        // line 9
        echo $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "content", array());
        echo "
                    <a href=\"#about\" class=\"btn btn-circle page-scroll\">
                        <i class=\"fa fa-angle-double-down animated\"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</header>";
    }

    public function getTemplateName()
    {
        return "modular/header.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  35 => 9,  31 => 8,  27 => 7,  19 => 1,);
    }
}
/* <!-- Intro Header -->*/
/* <header class="intro">*/
/*     <div class="intro-body">*/
/*         <div class="container">*/
/*             <div class="row">*/
/*                 <div class="col-md-8 col-md-offset-2">*/
/*                     <h1 class="brand-heading">{{ page.header.title }}</h1>*/
/*                     <p class="intro-text">{{ page.header.intro_text }}</p>*/
/*                     {{ page.content }}*/
/*                     <a href="#about" class="btn btn-circle page-scroll">*/
/*                         <i class="fa fa-angle-double-down animated"></i>*/
/*                     </a>*/
/*                 </div>*/
/*             </div>*/
/*         </div>*/
/*     </div>*/
/* </header>*/
