<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{
    #[Route('/')]
    public function homepage(): Response
    {
        // showing off early hints - just an optional extra
        $this->sendEarlyHints([], null, true);

        return $this->render('main/homepage.html.twig');
    }
}
