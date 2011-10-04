<?php
/**
 * @package WordPress
 * @subpackage Toolbox
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<title><?php
	/*
	 * Print the <title> tag based on what is being viewed.
	 */
	global $page, $paged;

	wp_title( '|', true, 'right' );

	// Add the blog name.
	bloginfo( 'name' );

	// Add the blog description for the home/front page.
	$site_description = get_bloginfo( 'description', 'display' );
	if ( $site_description && ( is_home() || is_front_page() ) )
		echo " | $site_description";

	// Add a page number if necessary:
	if ( $paged >= 2 || $page >= 2 )
		echo ' | ' . sprintf( __( 'Page %s', 'toolbox' ), max( $paged, $page ) );

	?></title>
<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo( 'stylesheet_url' ); ?>" />
<?php if ( is_singular() && get_option( 'thread_comments' ) ) wp_enqueue_script( 'comment-reply' ); ?>
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
<!--[if lt IE 9]>
<script src="<?php bloginfo( 'template_directory' ); ?>/html5.js" type="text/javascript"></script>
<![endif]-->

<?php wp_enqueue_script('jquery'); ?>
<?php wp_head(); ?>

<script language="javascript" type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/ws.js"></script>
<script language="javascript" type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/jquery.backstretch.min.js"></script>
<link href='http://fonts.googleapis.com/css?family=Droid+Sans:400,700' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Andika|Istok+Web|Open+Sans:300,400,600,700,800|Questrial' rel='stylesheet' type='text/css'>
<meta name = "viewport" content = "width=device-width" />




</head>

<body <?php body_class(); ?>>
<div id="page" class="hfeed">
	<header id="branding" role="banner">
		<div id="logo"><img src="<?php bloginfo('template_url'); ?>/images/umbrella.png"></div>
			<hgroup>
 				<h1 id="site-title"><a href="<?php echo home_url( '/' ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
				<h2 id="site-description"><?php bloginfo( 'description' ); ?></h2>
			</hgroup>
			
			
		<header id="nav"> 
			<?php wp_nav_menu( array('theme_location' => 'primary') ); ?>
		</header><!--Nav menu-->
		
		<div id="social-icons">
			<a href="http://twitter.com/saltcod"><img src="<?php bloginfo('template_url'); ?>/images/twitter-social.png"></a>
			<a href="<?php echo home_url( 'about' ); ?>"><img src="<?php bloginfo('template_url'); ?>/images/email-social.png"></a>
			<a href="http://saltcod.tumblr.com"><img src="<?php bloginfo('template_url'); ?>/images/tumblr-social.png"></a>
			
		</div><!-- #social-icons -->
		
	</header><!-- #branding -->


	
	<div id="main">