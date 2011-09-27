<?php
/**
 * @package WordPress
 * @subpackage Toolbox
 */

get_header(); ?>

<div id="featured-image">
	<h2 class="featured-image-caption">A year ago in Rome</h2>
	<img width='900px' src="<?php bloginfo( 'template_url' ); ?>/images/header_images/rome.jpg">
</div>

		<div id="primary">
			<div id="content" role="main">
					<div id="front-page-about" class="clearfix">
					 	<div id="welcome">Waterstreet GM is home to Terry Sutton.</div><!-- Welcome -->

					 	<div id="mission">
							<h2>DESIGN / DEVELOPMENT / WORDPRESS</h2>Taking new projects. Get <a href="about">in touch</a>.
						</div><!-- Mission -->
					</div><!-- front-page-about -->
				 
				
				
				<h2 class="home">Lately</h2>
				
				
				<?php /* Start the Loop */ ?>
				<?php while ( have_posts() ) : the_post('3'); ?>
					
					<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
						<header class="entry-header">
							<h1 class="entry-title"><a href="<?php the_permalink(); ?>" title="<?php printf( esc_attr__( 'Permalink to %s', 'toolbox' ), the_title_attribute( 'echo=0' ) ); ?>" rel="bookmark"><?php the_title(); ?></a></h1>
						</header>
						<div class="entry-content">
							
							<?php if ( in_category('1') ) {
								the_excerpt();
							} else {
								the_content();
							} ?>
							
							<?php wp_link_pages( array( 'before' => '<div class="page-link">' . __( 'Pages:', 'toolbox' ), 'after' => '</div>' ) ); ?>
							<?php edit_post_link( __( 'Edit', 'twentyten' ), '<span class="meta-sep">|</span> <span class="edit-link">', '</span>' ); ?>
							
						</div><!-- .entry-content -->
					</article><!-- article -->
				<?php endwhile; ?>
				
				
				 
				
				
				<?php /* Display navigation to next/previous pages when applicable */ ?>
				<?php if (  $wp_query->max_num_pages > 1 ) : ?>
					<nav id="nav-below">
						<span class="view-more"><div class="nav-next"><?php next_posts_link( __( 'Read more posts &rarr;') ); ?></div></a></span>
						<span class="view-more"><div class="nav-previous"><?php previous_posts_link( __( '&larr; Back') ); ?></div></a></span>
						
					</nav><!-- #nav-below -->
				<?php endif; ?>				

			</div><!-- #content -->
		</div><!-- #primary -->

<?php get_sidebar('home'); ?>
<?php get_footer(); ?>