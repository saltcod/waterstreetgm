<?php
/**
 * @package WordPress
 * @subpackage Toolbox
 */

get_header();  ?>

		<section id="primary">
			<div id="content" role="main">

				<header class="page-header">
					<h1 class="page-title"><?php
						printf( __( '%s', 'toolbox' ), '<span>' . single_cat_title( '', false ) . '</span>' );
					?></h1>

					<?php $categorydesc = category_description(); if ( ! empty( $categorydesc ) ) echo apply_filters( 'archive_meta', '<div class="archive-meta">' . $categorydesc . '</div>' ); ?>
				</header>

			 
				<?php /* Start the Loop */ ?>



					<?php
					     $args = array(
					                   'cat' => '11',
					                   'post_type' => 'post',
					                   'posts_per_page' => 15,
					                   'paged' => ( get_query_var('paged') ? get_query_var('paged') : 1),
					                   );

					    query_posts($args);

						while (have_posts()) : the_post();
							get_template_part( 'content'); 

						endwhile;
						?>
 				 

			 
				
				<?php /* Display navigation to next/previous pages when applicable */ ?>
				<?php if (  $wp_query->max_num_pages > 1 ) : ?>
					<nav id="nav-below">
						<h1 class="section-heading"><?php _e( 'Post navigation', 'toolbox' ); ?></h1>
						<div class="nav-previous"><span class="view-more"><?php next_posts_link( __( '<span class="meta-nav">&larr;</span> Yesterday', 'toolbox' ) ); ?></span></div>
						<div class="nav-next"><span class="view-more"><?php previous_posts_link( __( 'Tomorrow <span class="meta-nav">&rarr;</span>', 'toolbox' ) ); ?></span></div>
					</nav><!-- #nav-below -->
				<?php endif; ?>				

			</div><!-- #content -->
		</section><!-- #primary -->

<?php get_footer(); ?>