<?php
/**
 * @package WordPress
 * @subpackage Toolbox
 */

get_header(); ?>

<div id="featured-image">
	<h2 class="featured-image-caption">Waterford Valley. 2010.</h2>
	<img width='900px' src="<?php bloginfo( 'template_url' ); ?>/images/waterford-valley-crop.jpg">
</div>
		<div id="primary">
			<div id="content" role="main">
				
				<div id="front-page-about">
				 	<div id="welcome">Waterstreet GM is home to Terry Sutton.</div><!-- Welcome -->

				 	<div id="mission">
						<h2>DESIGN / DEVELOPMENT / WORDPRESS</h2>Taking new projects. Get <a href="contact">in touch</a>.
					</div><!-- Mission -->
				</div><!-- front-page-about -->

				
				<h2>Lately</h2>
				 
				<?php /* Display navigation to next/previous pages when applicable */ ?>
				<?php if (  $wp_query->max_num_pages > 1 ) : ?>
					<nav id="nav-below">
						<h1 class="section-heading"><?php _e( 'Post navigation', 'toolbox' ); ?></h1>
						<div class="nav-previous"><?php next_posts_link( __( '<span class="meta-nav">&larr;</span> Yesterday', 'toolbox' ) ); ?></div>
						<div class="nav-next"><?php previous_posts_link( __( 'Tomorrow <span class="meta-nav">&rarr;</span>', 'toolbox' ) ); ?></div>
					</nav><!-- #nav-below -->
				<?php endif; ?>
				
			 
				
			</div><!-- #content -->
		</div><!-- #primary -->
 
<?php get_footer(); ?>