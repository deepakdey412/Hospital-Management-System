package com.hms.hms_gateway.filter;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureException;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

@Component
public class TokenFilter extends AbstractGatewayFilterFactory<TokenFilter.Config> {

    private static final String SECRET_KEY = "1mDusXKpi6ODmTR2Cn94WgRI/moESixrW70gsecbyM/hd1ikRmAzimS2fEwD8tCZG9lfzg+unV8PWXAkQsbNhQ==";

    public TokenFilter() {
        super(Config.class);
    }

    @Override
    public GatewayFilter apply(Config config) {
        return (exchange, chain) -> {

            String path = exchange.getRequest().getPath().toString();

            // Skip login and register endpoints
            if (path.equals("/user/login") || path.equals("/user/register")) {
                return chain.filter(exchange);
            }

            //Check header of token
            HttpHeaders headers = exchange.getRequest().getHeaders();

            if (!headers.containsKey(HttpHeaders.AUTHORIZATION)) {
                throw new RuntimeException("Authentication header is missing");

//                exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
//                return exchange.getResponse().setComplete();
            }

            String authHeader = headers.getFirst(HttpHeaders.AUTHORIZATION);

            if (authHeader == null || !authHeader.startsWith("Bearer ")) {
                throw new RuntimeException("Authentication header is missing");

//                exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
//                return exchange.getResponse().setComplete();
            }

            String token = authHeader.substring(7); // Remove "Bearer "

            try {
                // Parse JWT token
                Claims claims = Jwts.parser()
                        .setSigningKey(SECRET_KEY)
                        .parseClaimsJws(token)
                        .getBody();

                // You can access claims here if needed
                String userEmail = claims.getSubject();
                System.out.println("Authenticated user: " + userEmail);

            } catch (SignatureException | IllegalArgumentException e) {
                exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
                return exchange.getResponse().setComplete();
            }

            // Continue filter chain if token is valid
            return chain.filter(exchange);
        };
    }

    public static class Config {
        // Add any configurable properties here if needed
    }
}
