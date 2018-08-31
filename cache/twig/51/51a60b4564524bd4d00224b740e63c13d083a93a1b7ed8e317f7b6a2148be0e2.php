<?php

/* modular/contact.html.twig */
class __TwigTemplate_5ab257c772239c0411190875b93fa511a48c852eebfabe81b0df6c53176c61b7 extends Twig_Template
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
        echo "<!-- Contact Section -->
<section id=\"contact\" class=\"container content-section text-center\">
    <div class=\"row\">
        <div class=\"col-lg-8 col-lg-offset-2\">
            ";
        // line 5
        echo $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "content", array());
        echo "
            <p><a href=\"mailto:";
        // line 6
        echo $this->getAttribute($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "header", array()), "contact_email", array());
        echo "\">";
        echo $this->getAttribute($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "header", array()), "contact_email", array());
        echo "</a></p>
            <ul class=\"list-inline banner-social-buttons\">
            ";
        // line 8
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "header", array()), "socials", array()));
        foreach ($context['_seq'] as $context["_key"] => $context["social"]) {
            // line 9
            echo "                <li>
                    <a href=\"";
            // line 10
            echo $this->getAttribute($context["social"], "url", array());
            echo "\" class=\"btn btn-default btn-lg\"><i class=\"fa fa-";
            echo $this->getAttribute($context["social"], "icon", array());
            echo " fa-fw\"></i> <span class=\"network-name\">";
            echo $this->getAttribute($context["social"], "name", array());
            echo "</span></a>
                </li>
            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['social'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 12
        echo " 
            </ul>
        </div>
    </div>
</section>";
    }

    public function getTemplateName()
    {
        return "modular/contact.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  56 => 12,  43 => 10,  40 => 9,  36 => 8,  29 => 6,  25 => 5,  19 => 1,);
    }
}
/* <!-- Contact Section -->*/
/* <section id="contact" class="container content-section text-center">*/
/*     <div class="row">*/
/*         <div class="col-lg-8 col-lg-offset-2">*/
/*             {{ page.content }}*/
/*             <p><a href="mailto:{{ page.header.contact_email }}">{{ page.header.contact_email }}</a></p>*/
/*             <ul class="list-inline banner-social-buttons">*/
/*             {% for social in page.header.socials %}*/
/*                 <li>*/
/*                     <a href="{{ social.url }}" class="btn btn-default btn-lg"><i class="fa fa-{{ social.icon }} fa-fw"></i> <span class="network-name">{{ social.name }}</span></a>*/
/*                 </li>*/
/*             {% endfor %} */
/*             </ul>*/
/*         </div>*/
/*     </div>*/
/* </section>*/
