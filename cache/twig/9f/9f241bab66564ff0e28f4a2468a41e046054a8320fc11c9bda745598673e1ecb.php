<?php

/* partials/footer.html.twig */
class __TwigTemplate_3514d8c551e9dbfa62cbfc1ecd2c1e797c5bd8bda93e2a8cda9c6b7b13374c2e extends Twig_Template
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
        echo "<!-- Footer -->
<footer>
    <div class=\"container text-center\">
        <p>Copyright &copy; ";
        // line 4
        echo $this->getAttribute((isset($context["site"]) ? $context["site"] : null), "title", array());
        echo " 2014 &middot; by <a href=\"http://vmcosta.net\">VC</a></p>
    </div>
</footer>";
    }

    public function getTemplateName()
    {
        return "partials/footer.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  24 => 4,  19 => 1,);
    }
}
/* <!-- Footer -->*/
/* <footer>*/
/*     <div class="container text-center">*/
/*         <p>Copyright &copy; {{ site.title }} 2014 &middot; by <a href="http://vmcosta.net">VC</a></p>*/
/*     </div>*/
/* </footer>*/
