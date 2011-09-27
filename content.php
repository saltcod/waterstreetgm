<?php
/**
 * @package WordPress
 * @subpackage Toolbox
 */
?>

<a id="toTop" style="display: none; "><img class="text-logo" src="<?php bloginfo('template_url'); ?>/images/scrollup.png" alt="scrollup"></a>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <header class="entry-header">
        <h1 class="entry-title"><a href="<?php the_permalink(); ?>" title="<?php printf( esc_attr__( 'Permalink to %s', 'toolbox' ), the_title_attribute( 'echo=0' ) ); ?>" rel="bookmark"><?php the_title(); ?></a></h1>

        <?php if ( 'post' == $post->post_type ) : ?>
        
        <?php endif; ?>
    </header><!-- .entry-header -->

    <?php if ( is_search() ) : // Only display Excerpts for search pages ?>
    <div class="entry-summary">
        <?php the_excerpt( __( 'Continue reading <span class="meta-nav">&rarr;</span>', 'toolbox' ) ); ?>
    </div><!-- .entry-summary -->
    <?php else : ?>
    <div class="entry-content">
        <?php the_content( __( 'Continue reading <span class="meta-nav">&rarr;</span>', 'toolbox' ) ); ?>
        <?php wp_link_pages( array( 'before' => '<div class="page-link">' . __( 'Pages:', 'toolbox' ), 'after' => '</div>' ) ); ?>
    </div><!-- .entry-content -->
    <?php endif; ?>


    <footer class="entry-meta">
     
        <?php echo get_the_date(); ?>   

            <?php
                $tags_list = get_the_tag_list( '', ', ' );
                if ( $tags_list ):
            ?>
                <span class="tag-links">
                    <?php printf( __( '<span class="%1$s">Folded neatly in:</span> %2$s', 'twentyten' ), 'entry-utility-prep entry-utility-prep-tag-links', $tags_list ); ?>
                </span>
                <?php endif; ?>
                <?php edit_post_link( __( 'Edit', 'twentyten' ), '<span class="edit-link">', '</span>' ); ?>
         
    </footer><!-- #entry-meta -->
</article><!-- #post-<?php the_ID(); ?> -->
